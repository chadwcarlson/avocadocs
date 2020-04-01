---
title: "Data deletion"
weight: 5
 
description: |
  Data deletion is handled via our backend providers. When a volume is released back to the provider, the provider will perform a wipe on the data utilizing either <a href="https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final">NIST 800-88</a> or <a href="(http://www.dss.mil/documents/odaa/nispom2006-5220.pdf)">DoD 5220.22-M</a> depending upon the offering. This wipe is done immediately before reuse.<br><br>

  If your project is utilizing encrypted volumes, the encryption key is destroyed when we release the volume back to the provider adding another layer of protection.
---

## Media destruction

Media destruction is handled via our backend providers. When the provider decommissions media it undergoes destruction as outlined in NIST 800-88.

## Resources

* AWS [Security Whitepaper](https://d1.awsstatic.com/whitepapers/Security/AWS_Security_Whitepaper.pdf)
* Azure [Data Retention](https://www.microsoft.com/en-us/trustcenter/privacy/you-own-your-data)
* Google Cloud Platform [Compliance Information](https://cloud.google.com/security/compliance/)
* Interoute [Compliance Information](https://www.gtt.net/gb-en/company/security-and-compliance/)
