const { resolve } = require('../lib/index')
const expect = require('chai').expect

describe('Subdirectory', function () {
  it('should not resolve non existing domains', async function () {
    let result = await resolve('did:web:example.com#controller');
    expect(result.didDocument).to.be.undefined
    expect(result.did).to.be.equals('did:web:example.com#controller')
    expect(result.url).to.be.equals('https://example.com/.well-known/did.json')
    expect(result.didResolutionMetadata.error).to.be.equals('notFound')
  })

  it('should resolve existing domains and keys', async function () {
    let result = await resolve('did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer#WEB');
    let expected = {
      "@context": [
        "https://www.w3.org/ns/did/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
      ],
      "id": "did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer#WEB",
      "type": "Ed25519VerificationKey2020",
      "controller": "did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer",
      "publicKeyMultibase": "z6MkkQRSRnwoZbR5rmZKvNkvpjawFQH8FCZi1G1FKKHT5sub"
    }

    expect(JSON.stringify(result.didDocument)).to.be.equals(JSON.stringify(expected))
    expect(result.did).to.be.equals('did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer#WEB')
    expect(result.url).to.be.equals('https://raw.githubusercontent.com/Path-Check/trust-registry/main/signer/did.json')
    expect(result.didResolutionMetadata.error).to.be.undefined
  })

  it('should resolve existing domains', async function () {
    let result = await resolve('did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer');
    let expected = {"@context":["https://www.w3.org/ns/did/v1","https://w3id.org/security/suites/ed25519-2020/v1"],"id":"did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer","type":"Ed25519VerificationKey2020","verificationMethod":[{"@context":["https://www.w3.org/ns/did/v1","https://w3id.org/security/suites/ed25519-2020/v1"],"id":"did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer#WEB","type":"Ed25519VerificationKey2020","controller":"did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer","publicKeyMultibase":"z6MkkQRSRnwoZbR5rmZKvNkvpjawFQH8FCZi1G1FKKHT5sub"}],"authentication":["did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer#WEB"],"assertionMethod":["did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer#WEB"],"capabilityDelegation":["did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer#WEB"],"capabilityInvocation":["did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer#WEB"]}

    expect(JSON.stringify(result.didDocument)).to.be.equals(JSON.stringify(expected))
    expect(result.did).to.be.equals('did:web:raw.githubusercontent.com:Path-Check:trust-registry:main:signer')
    expect(result.url).to.be.equals('https://raw.githubusercontent.com/Path-Check/trust-registry/main/signer/did.json')
    expect(result.didResolutionMetadata.error).to.be.undefined
  })
})