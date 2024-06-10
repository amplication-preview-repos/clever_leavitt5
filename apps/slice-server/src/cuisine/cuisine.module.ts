import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CuisineModuleBase } from "./base/cuisine.module.base";
import { CuisineService } from "./cuisine.service";
import { CuisineController } from "./cuisine.controller";
import { CuisineResolver } from "./cuisine.resolver";

@Module({
  imports: [CuisineModuleBase, forwardRef(() => AuthModule)],
  controllers: [CuisineController],
  providers: [CuisineService, CuisineResolver],
  exports: [CuisineService],
})
export class CuisineModule {}
