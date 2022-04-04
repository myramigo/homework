import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { CategorySchema } from './schemas/category.schema';
import { CategoryResponseSchema } from './schemas/categoryResponse.schema';

@Controller('api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiBody({ type: CategorySchema })
  @ApiCreatedResponse({type: CategoryResponseSchema,})
  create(@Body() categoryDto: CategoryDto) {
    return this.categoryService.create(categoryDto);
  }

  @Get()
  @ApiOkResponse({type: [CategoryResponseSchema]})
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: CategoryResponseSchema})
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({type: CategoryResponseSchema})
  @ApiBody({ type: CategorySchema })
  update(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    return this.categoryService.update(+id, categoryDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: CategoryResponseSchema})
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
