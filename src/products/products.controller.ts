import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return this.productsService.getAll({});
  }

  @Get('/:id')
  async getOneProduct(@Param('id') id: string) {
    return this.productsService.getOne({ id: Number(id) });
  }

  @Post()
  async createProduct(
    @Body()
    productData: {
      name: string;
      description: string;
      img: string;
      price: number;
      productCategoryId?: number;
    },
  ) {
    const { name, description, img, price, productCategoryId } = productData;
    return this.productsService.createProduct({
      name,
      description,
      img,
      price,
      productCategory: productCategoryId
        ? { connect: { id: productCategoryId } }
        : undefined,
    });
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body()
    updateData: {
      name?: string;
      description?: string;
      img?: string;
      price?: number;
      productCategoryId?: number;
    },
  ) {
    const { name, description, img, price, productCategoryId } = updateData;

    return this.productsService.updateProduct({
      where: { id: Number(id) },
      data: {
        name,
        description,
        img,
        price,
        productCategory: productCategoryId
          ? { connect: { id: productCategoryId } }
          : undefined,
      },
    });
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct({ id: Number(id) });
  }
}
