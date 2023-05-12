#!/usr/bin/env python3

import re
from pathlib import Path

import requests

URL_PATTERN = re.compile("\((https://\S+)\)")


def replace_urls(line):
    """Replace each found URL in line using specified replacement logic."""
    new_line = URL_PATTERN.sub(process_url_match, line)
    return new_line


def process_url_match(match):
    """
    Process each URL match by following any shortened links and then
    stripping out referrer info.
    """
    url = match.group(1)
    url = unshorten_url(url)
    url = strip_referral_info(url)
    return "(" + url + ")"


def unshorten_url(url):
    """
    If the url is shortened, this will use a HEAD to get the original
    unshortened url.
    """
    resp = requests.head(url, allow_redirects=True)
    return resp.url


ISBN_PATTERN = re.compile("/(dp|product)/(\S+?)(\?|$)")


def strip_referral_info(url):
    """
    Strip out all the referrer information.

    Example:

    >>> url = "https://www.amazon.com/Dune-Messiah-Chronicles-Book/dp/0441172695?_encoding=UTF8&qid=1673644743&sr=1-1&linkCode=sl1&tag=chanhosuh-20&linkId=b46c624d8774fec5212b0f529e09ae8d&language=en_US&ref_=as_li_ss_tl"
    >>> strip_referral_info(url)
    https://www.amazon.com/dp/0441172695
    """
    match = ISBN_PATTERN.search(url)
    isbn = match.group(2)
    return f"https://www.amazon.com/dp/{isbn}"


def main():
    filename = "_posts/2023-1-13-2023-reading-list.md"
    source_file = Path(filename)
    dest_file = source_file.with_suffix(source_file.suffix + ".new")
    with open(source_file, "r") as f_read, open(dest_file, "w") as f_write:
        for line in f_read:
            new_line = replace_urls(line)
            f_write.write(new_line)


if __name__ == "__main__":
    # url = "https://www.amazon.com/Dune-Messiah-Chronicles-Book/dp/0441172695?_encoding=UTF8&qid=1673644743&sr=1-1&linkCode=sl1&tag=chanhosuh-20&linkId=b46c624d8774fec5212b0f529e09ae8d&language=en_US&ref_=as_li_ss_tl"
    # new_url = strip_referral_info(url)
    # print(new_url)
    main()
