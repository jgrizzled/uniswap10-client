import { keccak_256 as keccak256 } from 'js-sha3';

const TRUST_WALLET_BASE_URL =
  'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets';

export function tokenIconURL(address = '') {
  return `${TRUST_WALLET_BASE_URL}/${toChecksumAddress(address)}/logo.png`;
}

function toChecksumAddress(address) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    throw new Error(
      'Given address "' + address + '" is not a valid Ethereum address.'
    );
  }

  address = address.toLowerCase().replace(/^0x/i, '');

  const addressHash = keccak256(address).replace(/^0x/i, '');
  let checksumAddress = '0x';

  for (let i = 0; i < address.length; i++) {
    // If ith character is 9 to f then make it uppercase
    if (parseInt(addressHash[i], 16) > 7) {
      checksumAddress += address[i].toUpperCase();
    } else {
      checksumAddress += address[i];
    }
  }

  return checksumAddress;
}
