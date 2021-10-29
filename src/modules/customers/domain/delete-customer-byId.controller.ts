import {Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCustomersByIdUseCase } from './delete-customer-byId.use-case'



class DeleteByIdCustomerController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } =  request.params;

        const curstomersUseCase = container.resolve(DeleteCustomersByIdUseCase);

        await curstomersUseCase.execute(id)

        console.log(id)

        return response.status(201).json("Usuário deletado com sucesso!")
    }

}

export { DeleteByIdCustomerController};