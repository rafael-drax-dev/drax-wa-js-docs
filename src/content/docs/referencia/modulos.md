---
title: Catálogo dos módulos internos
description: Inventário navegável de arquivos, exports e membros da implementação.
---
Este inventário corresponde à **0.0.1-alpha.34** e foi obtido dos módulos reais. Os caminhos são relativos à raiz do pacote. Eles identificam implementação; não são subpaths públicos de importação. Veja [imports e caminhos](/referencia/caminhos/).

Os parênteses identificam métodos, não suas assinaturas completas ou exemplos de chamada. Este é um inventário técnico; os guias de uso estão na referência pública.

Exports locais de um arquivo não são necessariamente exports públicos do pacote. Os nomes abaixo não constituem instrução para manipular sessões e chaves diretamente. A API suportada está disponível pela raiz e por /store.

[Baixar inventário estruturado](/module-catalog.json).

## auth

Autenticação, registro e pareamento.

<details>
<summary><code>src/auth/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `COMPANION_WEB_CLIENT_TYPE` | object | — |
| `CROCKFORD_CHARACTERS` | string | — |
| `DEFAULT_BROWSER_DESCRIPTION` | object | — |
| `KEY_BUNDLE_TYPE` | object | — |
| `PAIRING_CODE_PBKDF2_ITERATIONS` | number | — |
| `WA_ADV_ACCOUNT_SIG_PREFIX` | object | — |
| `WA_ADV_DEVICE_SIG_PREFIX` | object | — |
| `WA_ADV_HOSTED_ACCOUNT_SIG_PREFIX` | object | — |
| `WA_WEB_SERVICE_WORKER_URL` | string | — |
| `WA_WEB_VERSION` | object | — |
| `WA_WEB_VERSION_FALLBACK` | object | — |
| `aes256CtrDecrypt` | function | — |
| `aes256CtrEncrypt` | function | — |
| `buildLoginClientPayload` | function | — |
| `buildPairingCodeHelloNode` | function | — |
| `buildPairingQrData` | function | — |
| `buildRegistrationClientPayload` | function | — |
| `bytesToCrockford` | function | — |
| `configureSuccessfulPairing` | function | — |
| `derivePairingCodeKey` | function | — |
| `encodeBigEndian` | function | — |
| `encodeOutgoingSignedDeviceIdentity` | function | — |
| `extractWhatsAppWebClientRevision` | function | — |
| `fetchLatestWhatsAppWebVersion` | function | — |
| `finishPairingCodeCompanion` | function | — |
| `generatePairingCode` | function | — |
| `generatePairingEphemeralKeyPair` | function | — |
| `generateRegistrationCredentials` | function | — |
| `getCompanionPlatformId` | function | — |
| `unwrapPrimaryEphemeralPublicKey` | function | — |
| `wrapCompanionEphemeralPublicKey` | function | — |

</details>

<details>
<summary><code>src/auth/pair-success.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `WA_ADV_ACCOUNT_SIG_PREFIX` | object | — |
| `WA_ADV_DEVICE_SIG_PREFIX` | object | — |
| `WA_ADV_HOSTED_ACCOUNT_SIG_PREFIX` | object | — |
| `configureSuccessfulPairing` | function | — |
| `encodeOutgoingSignedDeviceIdentity` | function | — |

</details>

<details>
<summary><code>src/auth/pairing-code.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `CROCKFORD_CHARACTERS` | string | — |
| `PAIRING_CODE_PBKDF2_ITERATIONS` | number | — |
| `aes256CtrDecrypt` | function | — |
| `aes256CtrEncrypt` | function | — |
| `buildPairingCodeHelloNode` | function | — |
| `bytesToCrockford` | function | — |
| `derivePairingCodeKey` | function | — |
| `finishPairingCodeCompanion` | function | — |
| `generatePairingCode` | function | — |
| `generatePairingEphemeralKeyPair` | function | — |
| `unwrapPrimaryEphemeralPublicKey` | function | — |
| `wrapCompanionEphemeralPublicKey` | function | — |

</details>

<details>
<summary><code>src/auth/pairing-controller.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `PairingController` | function | `clear()`, `handle()`, `requestCode()` |

</details>

<details>
<summary><code>src/auth/qr-pairing.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `COMPANION_WEB_CLIENT_TYPE` | object | — |
| `DEFAULT_BROWSER_DESCRIPTION` | object | — |
| `buildPairingQrData` | function | — |
| `getCompanionPlatformId` | function | — |

</details>

<details>
<summary><code>src/auth/registration.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `KEY_BUNDLE_TYPE` | object | — |
| `WA_WEB_VERSION` | object | — |
| `buildLoginClientPayload` | function | — |
| `buildRegistrationClientPayload` | function | — |
| `encodeBigEndian` | function | — |
| `generateRegistrationCredentials` | function | — |

</details>

<details>
<summary><code>src/auth/web-version.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `WA_WEB_SERVICE_WORKER_URL` | string | — |
| `WA_WEB_VERSION_FALLBACK` | object | — |
| `extractWhatsAppWebClientRevision` | function | — |
| `fetchLatestWhatsAppWebVersion` | function | — |

</details>

## binary

Codificação e leitura de nós binários.

<details>
<summary><code>src/binary/decoder.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `decodeBinaryNode` | function | — |
| `decodeDecompressedBinaryNode` | function | — |
| `decompressBinaryNodeFrame` | function | — |

</details>

<details>
<summary><code>src/binary/encoder.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `encodeBinaryNode` | function | — |

</details>

<details>
<summary><code>src/binary/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `BINARY_TAGS` | object | — |
| `DOUBLE_BYTE_TOKENS` | object | — |
| `JID_DOMAINS` | object | — |
| `SINGLE_BYTE_TOKENS` | object | — |
| `decodeBinaryNode` | function | — |
| `decodeDecompressedBinaryNode` | function | — |
| `decompressBinaryNodeFrame` | function | — |
| `encodeBinaryNode` | function | — |
| `getBinaryNodeChild` | function | — |
| `getBinaryNodeChildren` | function | — |
| `jidDecode` | function | — |
| `jidEncode` | function | — |

</details>

<details>
<summary><code>src/binary/jid.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `JID_DOMAINS` | object | — |
| `jidDecode` | function | — |
| `jidEncode` | function | — |
| `serverForDomain` | function | — |

</details>

<details>
<summary><code>src/binary/nodes.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `getBinaryNodeChild` | function | — |
| `getBinaryNodeChildren` | function | — |

</details>

<details>
<summary><code>src/binary/tokens.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `BINARY_TAGS` | object | — |
| `DOUBLE_BYTE_TOKENS` | object | — |
| `SINGLE_BYTE_TOKENS` | object | — |

</details>

## core

Cliente e ciclo de conexão.

<details>
<summary><code>src/core/authenticated-connection.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `CONNECTION_PHASES` | object | — |
| `DraxAuthenticatedConnection` | function | `status()`, `nextTag()`, `connect()`, `requestPairingCode()`, `close()`, `logout()`, `sendNode()`, `queryNode()`, `waitUntilReady()` |

</details>

<details>
<summary><code>src/core/client.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DraxClient` | function | `events`, `isPaired`, `ready`, `status()`, `connect()`, `logout()`, `requestPairingCode()`, `waitUntilReady()`, `close()`, `sendText()`, `sendMessage()`, `resolveRecipient()`, `downloadMedia()` |

</details>

<details>
<summary><code>src/core/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `CONNECTION_PHASES` | object | — |
| `DraxAuthenticatedConnection` | function | `status()`, `nextTag()`, `connect()`, `requestPairingCode()`, `close()`, `logout()`, `sendNode()`, `queryNode()`, `waitUntilReady()` |
| `DraxClient` | function | `events`, `isPaired`, `ready`, `status()`, `connect()`, `logout()`, `requestPairingCode()`, `waitUntilReady()`, `close()`, `sendText()`, `sendMessage()`, `resolveRecipient()`, `downloadMedia()` |

</details>

## crypto

Primitivas criptográficas e canal seguro.

<details>
<summary><code>src/crypto/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `NOISE_DH_LENGTH` | number | — |
| `NOISE_HASH_LENGTH` | number | — |
| `NOISE_MAX_NONCE` | bigint | — |
| `NOISE_NONCE_LENGTH` | number | — |
| `NOISE_PROTOCOL_NAME` | string | — |
| `NOISE_TAG_LENGTH` | number | — |
| `NoiseCipherState` | function | `initializeKey()`, `hasKey()`, `nonce`, `setNonce()`, `encryptWithAd()`, `decryptWithAd()` |
| `NoiseSymmetricState` | function | `mixKey()`, `mixHash()`, `encryptAndHash()`, `decryptAndHash()`, `split()`, `getHandshakeHash()`, `getChainingKey()`, `cipherHasKey`, `cipherNonce` |
| `NoiseTransportState` | function | `encrypt()`, `decrypt()`, `writeNonce`, `readNonce` |
| `WA_NOISE_CERT_ISSUER_SERIAL` | number | — |
| `WA_NOISE_CERT_ROOT_KEY` | object | — |
| `WhatsAppNoiseInitiator` | function | `stage`, `ephemeralPublicKey`, `serverStaticKey`, `serverCertificate`, `handshakeHash`, `chainingKey`, `clientHelloMaterial()`, `processServerHello()`, `finishHandshake()` |
| `aesGcmDecrypt` | function | — |
| `aesGcmEncrypt` | function | — |
| `buildNoiseNonce` | function | — |
| `deriveX25519PublicKey` | function | — |
| `generateX25519KeyPair` | function | — |
| `hmacSha256` | function | — |
| `noiseHkdf` | function | — |
| `sha256` | function | — |
| `verifyCurve25519Signature` | function | — |
| `verifyServerCertificate` | function | — |
| `x25519` | function | — |

</details>

<details>
<summary><code>src/crypto/noise/cipher-state.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `NoiseCipherState` | function | `initializeKey()`, `hasKey()`, `nonce`, `setNonce()`, `encryptWithAd()`, `decryptWithAd()` |

</details>

<details>
<summary><code>src/crypto/noise/constants.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `NOISE_DH_LENGTH` | number | — |
| `NOISE_HASH_LENGTH` | number | — |
| `NOISE_MAX_NONCE` | bigint | — |
| `NOISE_NONCE_LENGTH` | number | — |
| `NOISE_PROTOCOL_NAME` | string | — |
| `NOISE_TAG_LENGTH` | number | — |

</details>

<details>
<summary><code>src/crypto/noise/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `NOISE_DH_LENGTH` | number | — |
| `NOISE_HASH_LENGTH` | number | — |
| `NOISE_MAX_NONCE` | bigint | — |
| `NOISE_NONCE_LENGTH` | number | — |
| `NOISE_PROTOCOL_NAME` | string | — |
| `NOISE_TAG_LENGTH` | number | — |
| `NoiseCipherState` | function | `initializeKey()`, `hasKey()`, `nonce`, `setNonce()`, `encryptWithAd()`, `decryptWithAd()` |
| `NoiseSymmetricState` | function | `mixKey()`, `mixHash()`, `encryptAndHash()`, `decryptAndHash()`, `split()`, `getHandshakeHash()`, `getChainingKey()`, `cipherHasKey`, `cipherNonce` |
| `NoiseTransportState` | function | `encrypt()`, `decrypt()`, `writeNonce`, `readNonce` |
| `WA_NOISE_CERT_ISSUER_SERIAL` | number | — |
| `WA_NOISE_CERT_ROOT_KEY` | object | — |
| `WhatsAppNoiseInitiator` | function | `stage`, `ephemeralPublicKey`, `serverStaticKey`, `serverCertificate`, `handshakeHash`, `chainingKey`, `clientHelloMaterial()`, `processServerHello()`, `finishHandshake()` |
| `aesGcmDecrypt` | function | — |
| `aesGcmEncrypt` | function | — |
| `buildNoiseNonce` | function | — |
| `deriveX25519PublicKey` | function | — |
| `generateX25519KeyPair` | function | — |
| `hmacSha256` | function | — |
| `noiseHkdf` | function | — |
| `sha256` | function | — |
| `verifyCurve25519Signature` | function | — |
| `verifyServerCertificate` | function | — |
| `x25519` | function | — |

</details>

<details>
<summary><code>src/crypto/noise/primitives.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `aesGcmDecrypt` | function | — |
| `aesGcmEncrypt` | function | — |
| `buildNoiseNonce` | function | — |
| `hmacSha256` | function | — |
| `noiseHkdf` | function | — |
| `sha256` | function | — |

</details>

<details>
<summary><code>src/crypto/noise/server-cert.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `WA_NOISE_CERT_ISSUER_SERIAL` | number | — |
| `WA_NOISE_CERT_ROOT_KEY` | object | — |
| `verifyCurve25519Signature` | function | — |
| `verifyServerCertificate` | function | — |

</details>

<details>
<summary><code>src/crypto/noise/symmetric-state.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `NoiseSymmetricState` | function | `mixKey()`, `mixHash()`, `encryptAndHash()`, `decryptAndHash()`, `split()`, `getHandshakeHash()`, `getChainingKey()`, `cipherHasKey`, `cipherNonce` |

</details>

<details>
<summary><code>src/crypto/noise/transport-state.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `NoiseTransportState` | function | `encrypt()`, `decrypt()`, `writeNonce`, `readNonce` |

</details>

<details>
<summary><code>src/crypto/noise/whatsapp-initiator.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `WhatsAppNoiseInitiator` | function | `stage`, `ephemeralPublicKey`, `serverStaticKey`, `serverCertificate`, `handshakeHash`, `chainingKey`, `clientHelloMaterial()`, `processServerHello()`, `finishHandshake()` |

</details>

<details>
<summary><code>src/crypto/noise/x25519.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `deriveX25519PublicKey` | function | — |
| `generateX25519KeyPair` | function | — |
| `x25519` | function | — |

</details>

## events

Catálogo e inscrições de eventos.

<details>
<summary><code>src/events/subscriptions.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `CLIENT_EVENT_NAMES` | object | — |
| `CONNECTION_EVENT_NAMES` | object | — |
| `ClientEvents` | function | `names`, `subscribe()` |

</details>

## Entrada principal

Entrada oficial do pacote.

<details>
<summary><code>src/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DRAX_WA_JS_VERSION` | string | — |
| `DraxClient` | function | `events`, `isPaired`, `ready`, `status()`, `connect()`, `logout()`, `requestPairingCode()`, `waitUntilReady()`, `close()`, `sendText()`, `sendMessage()`, `resolveRecipient()`, `downloadMedia()` |
| `MediaError` | function | — |
| `SessionStoreError` | function | — |
| `SqliteSessionStore` | function | `_open()`, `_initialize()`, `_read()`, `load()`, `save()`, `reset()`, `close()`, `toString()` |

</details>

## media

Fontes, validação, preparo, criptografia, upload e download.

<details>
<summary><code>src/media/crypto.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `decryptMediaBytes` | function | — |
| `deriveMediaKeys` | function | — |
| `encryptMediaBytes` | function | — |
| `mediaHkdfInfo` | function | — |

</details>

<details>
<summary><code>src/media/download.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DEFAULT_MAX_MEDIA_BYTES` | number | — |
| `DEFAULT_MEDIA_HOST` | string | — |
| `downloadMediaBytes` | function | — |
| `resolveMediaUrl` | function | — |

</details>

<details>
<summary><code>src/media/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DEFAULT_MAX_MEDIA_BYTES` | number | — |
| `DEFAULT_MEDIA_HOST` | string | — |
| `MediaError` | function | — |
| `decryptMediaBytes` | function | — |
| `deriveMediaKeys` | function | — |
| `downloadMediaBytes` | function | — |
| `encryptMediaBytes` | function | — |
| `mediaHkdfInfo` | function | — |
| `resolveMediaSource` | function | — |
| `resolveMediaUrl` | function | — |

</details>

<details>
<summary><code>src/media/preparation.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `prepareMedia` | function | — |
| `validateMediaType` | function | — |

</details>

<details>
<summary><code>src/media/source.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DEFAULT_SOURCE_LIMIT` | number | — |
| `MediaError` | function | — |
| `isPublicAddress` | function | — |
| `openPublicHttpResponse` | function | — |
| `resolveMediaSource` | function | — |
| `resolvePublicAddress` | function | — |
| `resolveRemoteSource` | function | — |
| `validateSourceUrl` | function | — |

</details>

<details>
<summary><code>src/media/upload.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `MediaUploader` | function | `upload()` |

</details>

## messages

Conteúdo, contexto e estratégias de envio.

<details>
<summary><code>src/messages/context.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `applyQuotedContext` | function | — |

</details>

<details>
<summary><code>src/messages/direct-sender.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DraxDirectMessageSender` | function | `sendText()`, `sendMessage()` |

</details>

<details>
<summary><code>src/messages/group-sender.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DraxGroupMessageSender` | function | `sendText()`, `sendMessage()` |

</details>

<details>
<summary><code>src/messages/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DraxDirectMessageSender` | function | `sendText()`, `sendMessage()` |
| `DraxGroupMessageSender` | function | `sendText()`, `sendMessage()` |
| `decodeWhatsAppMessagePlaintext` | function | — |
| `encodeWhatsAppDeviceSentTextMessage` | function | — |
| `encodeWhatsAppSenderKeyDistribution` | function | — |
| `encodeWhatsAppTextMessage` | function | — |
| `padRandomMax16` | function | — |
| `unpadRandomMax16` | function | — |

</details>

<details>
<summary><code>src/messages/media-content.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `materializeMedia` | function | — |

</details>

<details>
<summary><code>src/messages/outbound-shared.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `ensureDeviceSessions` | function | — |
| `publishMessage` | function | — |

</details>

<details>
<summary><code>src/messages/plaintext.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `decodeWhatsAppMessagePlaintext` | function | — |
| `encodeWhatsAppDeviceSentTextMessage` | function | — |
| `encodeWhatsAppMessage` | function | — |
| `encodeWhatsAppSenderKeyDistribution` | function | — |
| `encodeWhatsAppTextMessage` | function | — |
| `padRandomMax16` | function | — |
| `resolveMessageEnvelope` | function | — |
| `unpadRandomMax16` | function | — |
| `unwrapWhatsAppMessage` | function | — |

</details>

<details>
<summary><code>src/messages/preparation.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `prepareMessage` | function | — |

</details>

## proto

Schemas e codecs protobuf.

<details>
<summary><code>src/proto/adv/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `ADV_ENCRYPTION_TYPE` | object | — |
| `decodeADVDeviceIdentity` | function | — |
| `decodeADVSignedDeviceIdentity` | function | — |
| `decodeADVSignedDeviceIdentityHMAC` | function | — |
| `encodeADVDeviceIdentity` | function | — |
| `encodeADVSignedDeviceIdentity` | function | — |
| `encodeADVSignedDeviceIdentityHMAC` | function | — |

</details>

<details>
<summary><code>src/proto/adv/schema.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `ADVDeviceIdentityType` | object | — |
| `ADVSignedDeviceIdentityHMACType` | object | — |
| `ADVSignedDeviceIdentityType` | object | — |
| `ADV_ENCRYPTION_TYPE` | object | — |
| `advRoot` | object | — |

</details>

<details>
<summary><code>src/proto/cert/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `decodeCertChain` | function | — |
| `decodeCertDetails` | function | — |
| `encodeCertChain` | function | — |
| `encodeCertDetails` | function | — |

</details>

<details>
<summary><code>src/proto/cert/schema.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `CertChainType` | object | — |
| `CertDetailsType` | object | — |
| `certRoot` | object | — |

</details>

<details>
<summary><code>src/proto/client-payload/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `CLIENT_PLATFORM` | object | — |
| `CONNECT_REASON` | object | — |
| `CONNECT_TYPE` | object | — |
| `RELEASE_CHANNEL` | object | — |
| `WEB_SUB_PLATFORM` | object | — |
| `decodeClientPayload` | function | — |
| `encodeClientPayload` | function | — |

</details>

<details>
<summary><code>src/proto/client-payload/schema.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `CLIENT_PLATFORM` | object | — |
| `CONNECT_REASON` | object | — |
| `CONNECT_TYPE` | object | — |
| `ClientPayloadType` | object | — |
| `RELEASE_CHANNEL` | object | — |
| `WEB_SUB_PLATFORM` | object | — |
| `clientPayloadRoot` | object | — |

</details>

<details>
<summary><code>src/proto/device-props/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DEVICE_PLATFORM_TYPES` | object | — |
| `decodeDeviceProps` | function | — |
| `encodeDeviceProps` | function | — |

</details>

<details>
<summary><code>src/proto/device-props/schema.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DEVICE_PLATFORM_TYPES` | object | — |
| `DevicePropsType` | object | — |
| `devicePropsRoot` | object | — |

</details>

<details>
<summary><code>src/proto/handshake/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `HANDSHAKE_PQ_MODES` | object | — |
| `decodeHandshakeMessage` | function | — |
| `encodeClientFinish` | function | — |
| `encodeClientHello` | function | — |
| `encodeHandshakeMessage` | function | — |
| `requireServerHello` | function | — |

</details>

<details>
<summary><code>src/proto/handshake/schema.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `HANDSHAKE_PQ_MODES` | object | — |
| `HandshakeMessageType` | object | — |
| `handshakeRoot` | object | — |

</details>

<details>
<summary><code>src/proto/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `HANDSHAKE_PQ_MODES` | object | — |
| `decodeHandshakeMessage` | function | — |
| `encodeClientFinish` | function | — |
| `encodeClientHello` | function | — |
| `encodeHandshakeMessage` | function | — |
| `requireServerHello` | function | — |

</details>

## protocol

Stanzas, confirmação e receipts.

<details>
<summary><code>src/protocol/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `buildAckStanza` | function | — |
| `buildDirectFanoutMessageStanza` | function | — |
| `buildDirectMessageStanza` | function | — |
| `buildReceiptAckStanza` | function | — |
| `extractReceiptIds` | function | — |
| `generateMessageIdV2` | function | — |
| `parseReceiptNode` | function | — |
| `participantHashV2` | function | — |

</details>

<details>
<summary><code>src/protocol/outbound-message.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `buildDirectFanoutMessageStanza` | function | — |
| `buildDirectMessageStanza` | function | — |
| `buildMessageMetadataNodes` | function | — |
| `generateMessageIdV2` | function | — |
| `participantHashV2` | function | — |

</details>

<details>
<summary><code>src/protocol/receipt.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `buildReceiptAckStanza` | function | — |
| `extractReceiptIds` | function | — |
| `parseReceiptNode` | function | — |

</details>

<details>
<summary><code>src/protocol/stanza-ack.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `buildAckStanza` | function | — |

</details>

## signal

Sessões diretas, grupos, diretório e prekeys.

<details>
<summary><code>src/signal/direct-session.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DraxDirectSignal` | function | `hasSession()`, `getIdentityKey()`, `getLocalIdentityKey()`, `injectOutgoingSession()`, `encryptMessage()`, `decryptMessage()` |
| `jidToSignalProtocolAddress` | function | — |

</details>

<details>
<summary><code>src/signal/directory.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DraxSignalDirectory` | function | `resolveRecipient()`, `resolveDirectFanout()`, `fetchBundles()` |
| `buildDeviceSyncQuery` | function | — |
| `buildKeyBundleQuery` | function | — |
| `buildLidLookupQuery` | function | — |
| `normalizePhoneJid` | function | — |
| `parseDeviceSyncResponse` | function | — |
| `parseKeyBundleResponse` | function | — |
| `parseLidLookupResponse` | function | — |

</details>

<details>
<summary><code>src/signal/group-sender-key.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DraxGroupSignal` | function | `createDistribution()`, `processDistribution()`, `encryptGroupMessage()`, `decryptGroupMessage()` |
| `decodeSenderKeyDistribution` | function | — |
| `senderKeyName` | function | — |

</details>

<details>
<summary><code>src/signal/icdc.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DEVICE_LIST_METADATA_VERSION` | number | — |
| `ICDC_HASH_LENGTH` | number | — |
| `computeDeviceKeyHash` | function | — |

</details>

<details>
<summary><code>src/signal/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DEVICE_LIST_METADATA_VERSION` | number | — |
| `DraxDirectSignal` | function | `hasSession()`, `getIdentityKey()`, `getLocalIdentityKey()`, `injectOutgoingSession()`, `encryptMessage()`, `decryptMessage()` |
| `DraxGroupSignal` | function | `createDistribution()`, `processDistribution()`, `encryptGroupMessage()`, `decryptGroupMessage()` |
| `DraxSignalDirectory` | function | `resolveRecipient()`, `resolveDirectFanout()`, `fetchBundles()` |
| `DraxSignalSessionStore` | function | `loadSession()`, `storeSession()`, `isTrustedIdentity()`, `loadIdentityKey()`, `saveIdentity()`, `loadPreKey()`, `removePreKey()`, `loadSignedPreKey()`, `getOurRegistrationId()`, `getOurIdentity()` |
| `ICDC_HASH_LENGTH` | number | — |
| `INITIAL_PREKEY_COUNT` | number | — |
| `KEY_BUNDLE_TYPE` | object | — |
| `MIN_PREKEY_COUNT` | number | — |
| `buildDeviceSyncQuery` | function | — |
| `buildKeyBundleQuery` | function | — |
| `buildLidLookupQuery` | function | — |
| `computeDeviceKeyHash` | function | — |
| `createPreKeyUpload` | function | — |
| `decodeSenderKeyDistribution` | function | — |
| `generateSignalPreKeys` | function | — |
| `jidToSignalProtocolAddress` | function | — |
| `normalizePhoneJid` | function | — |
| `parseDeviceSyncResponse` | function | — |
| `parseKeyBundleResponse` | function | — |
| `parseLidLookupResponse` | function | — |
| `senderKeyName` | function | — |
| `toSignalPublicKey` | function | — |
| `xmppPreKey` | function | — |
| `xmppSignedPreKey` | function | — |

</details>

<details>
<summary><code>src/signal/prekeys.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `INITIAL_PREKEY_COUNT` | number | — |
| `KEY_BUNDLE_TYPE` | object | — |
| `MIN_PREKEY_COUNT` | number | — |
| `createPreKeyUpload` | function | — |
| `generateSignalPreKeys` | function | — |
| `xmppPreKey` | function | — |
| `xmppSignedPreKey` | function | — |

</details>

<details>
<summary><code>src/signal/session-store.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DraxSignalSessionStore` | function | `loadSession()`, `storeSession()`, `isTrustedIdentity()`, `loadIdentityKey()`, `saveIdentity()`, `loadPreKey()`, `removePreKey()`, `loadSignedPreKey()`, `getOurRegistrationId()`, `getOurIdentity()` |
| `toSignalPublicKey` | function | — |

</details>

## store

Persistência, codec e validação da sessão.

<details>
<summary><code>src/store/configuration.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `resolveSessionStore` | function | — |

</details>

<details>
<summary><code>src/store/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `SessionStoreError` | function | — |
| `SqliteSessionStore` | function | `_open()`, `_initialize()`, `_read()`, `load()`, `save()`, `reset()`, `close()`, `toString()` |
| `decodeSessionValue` | function | — |
| `encodeSessionValue` | function | — |
| `resolveSessionStore` | function | — |
| `validateSessionState` | function | — |

</details>

<details>
<summary><code>src/store/public.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `SessionStoreError` | function | — |
| `SqliteSessionStore` | function | `_open()`, `_initialize()`, `_read()`, `load()`, `save()`, `reset()`, `close()`, `toString()` |

</details>

<details>
<summary><code>src/store/session-codec.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `decodeSessionValue` | function | — |
| `encodeSessionValue` | function | — |

</details>

<details>
<summary><code>src/store/session-validation.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `SessionStoreError` | function | — |
| `validateSessionState` | function | — |

</details>

<details>
<summary><code>src/store/sqlite-session-store.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `SqliteSessionStore` | function | `_open()`, `_initialize()`, `_read()`, `load()`, `save()`, `reset()`, `close()`, `toString()` |

</details>

## transport

WebSocket e framing.

<details>
<summary><code>src/transport/errors.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `TransportConnectionError` | function | — |
| `TransportError` | function | — |
| `TransportStateError` | function | — |
| `TransportTimeoutError` | function | — |

</details>

<details>
<summary><code>src/transport/frame-codec.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `FRAME_LENGTH_BYTES` | number | — |
| `MAX_FRAME_PAYLOAD_LENGTH` | number | — |
| `WA_CONNECTION_HEADER` | object | — |
| `WaFrameDecoder` | function | `pendingBytes`, `reset()`, `push()` |
| `WaFrameEncoder` | function | `sentIntro`, `reset()`, `encode()` |
| `decodeFrameLength` | function | — |
| `encodeFrameLength` | function | — |

</details>

<details>
<summary><code>src/transport/index.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DEFAULT_CLOSE_TIMEOUT_MS` | number | — |
| `DEFAULT_CONNECT_TIMEOUT_MS` | number | — |
| `DEFAULT_WHATSAPP_ORIGIN` | string | — |
| `DEFAULT_WHATSAPP_WEBSOCKET_URL` | string | — |
| `FRAME_LENGTH_BYTES` | number | — |
| `MAX_FRAME_PAYLOAD_LENGTH` | number | — |
| `TRANSPORT_STATES` | object | — |
| `TransportConnectionError` | function | — |
| `TransportError` | function | — |
| `TransportStateError` | function | — |
| `TransportTimeoutError` | function | — |
| `WA_CONNECTION_HEADER` | object | — |
| `WaFrameDecoder` | function | `pendingBytes`, `reset()`, `push()` |
| `WaFrameEncoder` | function | `sentIntro`, `reset()`, `encode()` |
| `WebSocketTransport` | function | `isOpen`, `status()`, `connect()`, `send()`, `close()`, `destroy()` |
| `decodeFrameLength` | function | — |
| `encodeFrameLength` | function | — |

</details>

<details>
<summary><code>src/transport/websocket-transport.js</code></summary>

| Export local | Tipo | Membros próprios do protótipo / estáticos |
| --- | --- | --- |
| `DEFAULT_CLOSE_TIMEOUT_MS` | number | — |
| `DEFAULT_CONNECT_TIMEOUT_MS` | number | — |
| `DEFAULT_WHATSAPP_ORIGIN` | string | — |
| `DEFAULT_WHATSAPP_WEBSOCKET_URL` | string | — |
| `TRANSPORT_STATES` | object | — |
| `WebSocketTransport` | function | `isOpen`, `status()`, `connect()`, `send()`, `close()`, `destroy()` |

</details>

## Campos visíveis da instância

Além dos getters públicos events, ready e isPaired, a implementação mantém os campos abaixo. A presença de uma propriedade JavaScript não equivale a um contrato de integração suportado. Estes campos são internos e podem mudar.

- `bound`
- `connection`
- `directSender`
- `directSignal`
- `downloadOptions`
- `groupSender`
- `groupSignal`
- `mediaOptions`
- `mediaUploader`
- `ownsSessionStore`
- `processing`
- `sessionStore`
- `signalDirectory`

Os membros privados com # não são acessíveis externamente. Este catálogo enumera nomes; não publica credenciais, valores de chaves ou dados de sessão. Para estender armazenamento e organizar a aplicação, utilize os pontos públicos [documentados](/referencia/cliente/).
