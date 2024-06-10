import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CategoryItemResolverBase } from "./base/categoryItem.resolver.base";
import { CategoryItem } from "./base/CategoryItem";
import { CategoryItemService } from "./categoryItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CategoryItem)
export class CategoryItemResolver extends CategoryItemResolverBase {
  constructor(
    protected readonly service: CategoryItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
