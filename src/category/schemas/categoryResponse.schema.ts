// src\category\schemas\category.schema.ts
import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseSchema {
    @ApiProperty({
        type: Number,
        example: 1,
        minLength: 1,
    })
    id: number;
    @ApiProperty({
        type: String,
        example: 'Phones',
        minLength: 2,
        maxLength: 50,
    })
    title: string;
}
