import os
import argparse
from playwright.sync_api import sync_playwright

parser = argparse.ArgumentParser(description = "Generate PDF slides from Reveal.js HTML")
parser.add_argument("input", help = "HTML filename", type = os.path.abspath)
parser.add_argument("output", help = "PDF filename", type = os.path.abspath)
args = parser.parse_args()

with sync_playwright() as p:
  browser = p.chromium.launch()
  page = browser.new_page()
  url = "file://" + args.input

  page.goto(url + "?print-pdf", wait_until = "networkidle")
  page.locator(".reveal.ready").wait_for()
  page.pdf(path = args.output, prefer_css_page_size = True)