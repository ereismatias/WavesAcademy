import { Signer } from '@waves/signer';
import { ProviderCloud} from '@waves.exchange/provider-cloud';

const signer = new Signer({
    // Vamos especificar o endereço de Testnet em nosso exemplo.
    NODE_URL: 'https://nodes-testnet.wavesnodes.com',
  });

signer.setProvider(new ProviderCloud());

async function logToWaves() {

    const user = await signer.login();
    const balances = await signer.getBalance();

    const [broadcastedTransfer] = await signer

        .transfer({ amount: 100000000, recipient: 'alias: T:merry' }) // Irá transferir 1 WAVES para alias Merry
        .broadcast(); // A Promise será resolvida após a assinatura do usuário e a resposta do node

    const [signedTransfer] = await signer

        .transfer({ amount: 100000000, recipient: 'alias: T: merry' }) // Irá transferir 1 WAVES para alias Merry
        .sign(); // A Promise será resolvida após a assinatura do usuário

}

logToWaves();