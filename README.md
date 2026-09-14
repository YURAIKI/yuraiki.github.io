# YURAIKI — Brand Website + Official Policy Center

Static HTML website for GitHub Pages.

## Pages
- `index.html` — YURAIKI brand site
- `privacy.html` — Privacy Policy
- `child-safety.html` — Child Safety / Parent Guide
- `refund.html` — Payments & Refunds
- `terms.html` — Terms of Service
- `contact.html` — Contact
- `styles.css` / `script.js`

## Current product assumptions reflected here
- Primary target age: 3–8
- Child direct identifiers are not collected
- Parent-set nickname may be processed
- Parent email may be processed for support and purchase-related functions
- Photos selected for coloring are processed on-device and are not uploaded to YURAIKI servers
- Purchase access is restricted to Parent Mode
- Parent Mode can use a parent-set PIN and an additional parent verification step
- Digital goods/purchase/use records are retained for delivery, restore, backup, and support
- Colored artwork/design information may be stored for backup/restore
- Current service does not show advertising

## MUST CONFIRM BEFORE PUBLICATION
1. Replace `[사업자등록번호 입력]` with the actual business registration number.
2. Confirm the exact parent email/account architecture. Do not describe an account system that the app does not actually have.
3. Confirm exactly what artwork/colored-design data is uploaded to the server and retained. If backup is cloud-based, document server location, processors, retention, deletion and security.
4. Confirm all SDKs (Firebase, Crashlytics, analytics, etc.). The Privacy Policy and Google Play Data Safety form must match the actual build.
5. Do not claim that YURAIKI collects raw card numbers. Google Play Billing should handle payment credentials if that is the actual implementation.
6. Confirm Parent Mode implementation. A math challenge can be an additional gate, but do not describe it as legal "parental consent" by itself.
7. For EU users, confirm GDPR applicability and the lawful basis/parental-consent flow where required. For Korea, review PIPA and applicable child/teen data rules.
8. Confirm Google Play Target Audience, Families, Data Safety, Content Rating and purchase declarations against the production APK/AAB.
9. Confirm Korean e-commerce/consumer-law refund wording with the final Google Play billing flow.

## GitHub Pages
Upload the files to a repository, then enable GitHub Pages from the repository's Pages settings. A custom domain such as `yuriki.kr` can be configured after DNS setup.

## Important
This website is a product/policy template, not legal advice. The final policies should be reviewed against the actual app build, backend, SDK list and Korean/EU/US legal requirements before launch.
