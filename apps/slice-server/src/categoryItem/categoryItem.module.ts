import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CategoryItemModuleBase } from "./base/categoryItem.module.base";
import { CategoryItemService } from "./categoryItem.service";
import { CategoryItemController } from "./categoryItem.controller";
import { CategoryItemResolver } from "./categoryItem.resolver";

@Module({
  imports: [CategoryItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [CategoryItemController],
  providers: [CategoryItemService, CategoryItemResolver],
  exports: [CategoryItemService],
})
export class CategoryItemModule {}
