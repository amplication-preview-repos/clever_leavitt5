import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoryItemServiceBase } from "./base/categoryItem.service.base";

@Injectable()
export class CategoryItemService extends CategoryItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
