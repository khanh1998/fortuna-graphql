import { userSchema } from "./schema";
import { UserResolver } from "./resolver";
import { createModule } from "graphql-modules";

export const UserModule = createModule({
  id: "User-Module",
  dirname: __dirname,
  typeDefs: [userSchema],
  resolvers: [UserResolver],
});
