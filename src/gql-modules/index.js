import { UserModule } from "./user";
import { createApplication } from "graphql-modules";

export const application = createApplication({
	modules: [UserModule],
})