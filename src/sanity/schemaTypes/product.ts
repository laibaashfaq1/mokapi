import { defineType,defineField } from "sanity";

export const product = defineType ({
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        defineField(
      {
        name: 'title',
        type: 'string',
        title: 'Product_name',
        validation: Rule => Rule.required(),
      }),
      defineField(
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      }),
      defineField(
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
      }),
      defineField(
      {
        name: 'stock_availability',
        type: 'number',
        title: 'Stock Availability',
      }),
      defineField(
      {
        name:'rating',
        type:'number',
        title:'Rating',
        description:'Rating of the product'
      }),
      defineField(
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        },
        description: 'Add tags like "new arrival", "bestseller", etc.'
      }),
      defineField(
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true // Enables cropping and focal point selection
        },
      },),
      defineField(
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'title',
                maxLength:96
            },
            validation:Rule => Rule.required()
        },
      ),
    //   defineField({
    //     name:'content',
    //     type:'array',
    //     title:'Content',
    //     of:[
    //         defineArrayMember({
    //             type:'block'
    //         })
    //     ]
    // }),
      //if you have this so you can  un comment this
    
    //   {
    //     name: 'discountPercentage',
    //     type: 'number',
    //     title: 'Discount Percentage',
    //   },
    //   {
    //     name: 'priceWithoutDiscount',
    //     type: 'number',
    //     title: 'Price Without Discount',
    //     description: 'Original price before discount'
    //   },
    //   {
    //     name: 'sizes',
    //     type: 'array',
    //     title: 'Sizes',
    //     of: [{ type: 'string' }],
    //     options: {
    //       layout: 'tags'
    //     },
    //     description: 'Add sizes like S , M , L , XL , XXL'
    //   },
    ]
  }
);