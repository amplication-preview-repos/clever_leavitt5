import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CuisineServiceBase } from "./base/cuisine.service.base";

@Injectable()
export class CuisineService extends CuisineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
