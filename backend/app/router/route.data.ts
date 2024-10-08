import { Route,Routes } from "./route.type";
import Routers from "../feature-modules/index"

export const routes : Routes = [
    new Route("/roles",Routers.RoleRouter),
    new Route("/users",Routers.UserRouter),
    new Route("/transactions",Routers.TransactionsRouter),
    new Route("/budgets",Routers.BudgetRouter),
    new Route("/categories",Routers.CategoryRouter)
]