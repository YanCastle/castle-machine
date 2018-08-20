import * as os from 'os'
import hddSpace from 'hdd-space'
export enum Arch {
    unknow,
    arm,
    arm64,
    ia32,
    mips,
    mipsel,
    ppc,
    ppc64,
    s390,
    s390x,
    x32,
    x64
}
export enum Platform {
    unknow,
    aix, darwin, freebas, linux, openbsd, sunos, win32
}
export enum Type {
    unknow,
    Linux, Darwin, Windows_NT
}
export class HardInfo {
    arch: Arch = Arch.unknow
    platform: Platform = Platform.unknow;
    cpu: { model: string, speed: number, amount: number } = { model: '', speed: 0, amount: 0 }
    hostname: string = ''
    /**
     * 网络
     */
    network: any = {};
    /**
     * 内存
     */
    memory: {
        total: number,
        free: number
    }
    /**
     * 开机时间
     */
    uptime: number
    /**
     * 磁盘信息
     */
    hdd: any = {}
    release: string = ''
    type: Type = Type.unknow
    user: { username: string, shell: string, homedir: string, uid: number, gid: number } = { username: '', shell: '', homedir: '', uid: 0, gid: 0 }
    constructor(gen: boolean = false) {
        if (gen) {
            this.gen()
        }
    }
    async gen() {
        this.arch = Arch[os.arch()]
        let cpus = os.cpus()
        this.cpu = { model: cpus[0].model, speed: cpus[0].speed, amount: cpus.length }
        this.memory = {
            total: os.totalmem(),
            free: os.freemem()
        }
        this.hostname = os.hostname()
        this.hdd = await new Promise((s, j) => {
            hddSpace({ format: 'auto' }, (info) => {
                s(info)
            })
        })
        this.uptime = os.uptime()
        this.platform = Platform[os.platform()]
        this.release = os.release()
        this.type = Type[os.type()]
        this.user = os.userInfo()
        this.network = os.networkInterfaces()
        return this;
    }
}