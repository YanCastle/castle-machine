import * as machine from './index'
async function gen() {
    console.log(JSON.stringify(await new machine.HardInfo().gen()))
}
gen()