# Visitor log setup

The portfolio is hosted by GitHub Pages, which cannot read a visitor's IP address on its own. The site uses [IPWhois](https://ipwhois.io/documentation) in the visitor's browser for IP and approximate city, region, and country, then sends those values to a Google Apps Script web app attached to a private Google Sheet. The Sheet also records the visit time and page path.

## Connect the Sheet

1. Open the private visitor log Sheet you created.
2. In that Sheet, open **Extensions → Apps Script**. The script uses `@OnlyCurrentDoc` so its spreadsheet authorization is limited to this Sheet.
3. Replace the editor contents with [Code.gs](Code.gs) and save.
4. Use **Deploy → New deployment → Web app**. Choose **Execute as: Me** and access for visitors without Google sign-in. Authorize the script and copy its `/exec` URL.
5. The production endpoint is set in [`.env.production`](../.env.production). The next GitHub Pages build will embed it and show the visitor notice on the site.
6. Visit the published site and verify a new row appears in the `Visits` tab. The first successful visit creates the tab and column headers automatically.

No Google password or Sheet editing credential belongs in this repository. Keep the Sheet private.

The web app runs under the deploying account when **Execute as: Me** is selected. Public visitors can call its `doPost` function, but the provided script has no function that reads or returns Sheet contents. Use the current [Code.gs](Code.gs), which includes `@OnlyCurrentDoc`, before deploying a version. A public caller can still submit false rows, so do not treat this as a trustworthy identity log.

## Limits

- IP-based locations are approximate; they are not GPS locations or the visitor's identity.
- This static-site approach relies on data sent by the visitor's browser. Records can be missed by blockers or the lookup service's limits, and a determined person can submit false rows. The Apps Script endpoint is public once deployed.
- IPWhois documents a free limit of 1,000 browser lookups per day per domain. If this site grows beyond that or needs reliable server-side logging, move collection to a server or edge function.
