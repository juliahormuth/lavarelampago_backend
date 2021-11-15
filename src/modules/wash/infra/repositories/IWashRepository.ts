import { IWashDTO } from "../../dto/IWashDTO";
import { Wash } from "../entities/Wash";



interface IWashRepository {
    create(request: IWashDTO): Promise<void>
    getAll(): Promise<Wash[]>
    findById(id:string): Promise<Wash>
    }


export { IWashRepository }