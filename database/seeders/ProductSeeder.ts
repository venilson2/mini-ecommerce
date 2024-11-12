import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeederSeeder extends BaseSeeder {
  public async run () {
    const products = [
      {
        name: 'Apple iPhone 13',
        price: 999.99,
        description: 'Smartphone with A15 Bionic chip, 6.1-inch display.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Samsung Galaxy S22',
        price: 799.99,
        description: 'Flagship smartphone with an incredible camera.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Sony WH-1000XM4',
        price: 348.00,
        description: 'Noise-canceling over-ear headphones with amazing sound quality.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Nike Air Max 2021',
        price: 150.00,
        description: 'Comfortable and stylish sneakers for everyday use.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Dell XPS 13',
        price: 1099.99,
        description: 'High-performance laptop with Intel Core i7 and 16GB RAM.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Amazon Echo Dot 4th Gen',
        price: 49.99,
        description: 'Smart speaker with Alexa voice control.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'MacBook Pro 16-inch',
        price: 2399.99,
        description: 'Powerful laptop with M1 Max chip and 64GB of RAM.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Bose QuietComfort 35 II',
        price: 299.99,
        description: 'Over-ear noise-canceling headphones with voice control.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Samsung 55-inch 4K TV',
        price: 699.99,
        description: 'Smart 4K TV with HDR and Alexa voice control.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Canon EOS R5',
        price: 3899.00,
        description: 'Mirrorless camera with 45MP sensor and 8K video.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'GoPro HERO10 Black',
        price: 499.99,
        description: 'Action camera with 5.3K video and HyperSmooth 4.0.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'iPad Air 4th Gen',
        price: 599.99,
        description: 'Tablet with A14 Bionic chip, 10.9-inch display.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Lenovo ThinkPad X1 Carbon',
        price: 1499.99,
        description: 'Premium business laptop with Intel Core i7, 16GB RAM.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Asus ROG Strix G15',
        price: 1199.99,
        description: 'Gaming laptop with AMD Ryzen 7, 16GB RAM, 512GB SSD.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Bose SoundLink Revolve+',
        price: 349.99,
        description: 'Portable Bluetooth speaker with 360-degree sound.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Microsoft Surface Pro 7',
        price: 749.99,
        description: '2-in-1 laptop with Intel Core i5 and detachable keyboard.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Google Pixel 6 Pro',
        price: 899.99,
        description: 'Smartphone with Google Tensor chip and 5G connectivity.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'HP Spectre x360',
        price: 1399.99,
        description: 'Convertible laptop with Intel Core i7, 16GB RAM, 512GB SSD.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'JBL Charge 5',
        price: 179.99,
        description: 'Portable Bluetooth speaker with 20 hours of playtime.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Razer DeathAdder V2',
        price: 69.99,
        description: 'Ergonomic gaming mouse with 20,000 DPI optical sensor.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Fitbit Charge 5',
        price: 149.99,
        description: 'Fitness tracker with built-in GPS, heart rate monitor.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Apple Watch Series 7',
        price: 399.99,
        description: 'Smartwatch with larger display and advanced fitness tracking.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Nintendo Switch OLED',
        price: 349.99,
        description: 'Handheld gaming console with 7-inch OLED screen.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Sony PlayStation 5',
        price: 499.99,
        description: 'Next-gen gaming console with ultra-fast SSD and 4K graphics.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Oculus Quest 2',
        price: 299.99,
        description: 'Standalone VR headset with 256GB storage, no PC required.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Samsung Galaxy S22 Ultra',
        price: 1199.99,
        description: 'Flagship smartphone with 108MP camera and 5G support.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'GoPro HERO10 Black',
        price: 499.99,
        description: 'Action camera with 5.3K video, waterproof, 23MP photos.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Apple MacBook Air M2',
        price: 999.99,
        description: 'Laptop with Apple M2 chip, 8GB RAM, 256GB SSD.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'LG OLED55CXPUA Alexa Built-In OLED TV',
        price: 1499.99,
        description: '55-inch 4K OLED TV with AI-powered features.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Sony WH-1000XM4',
        price: 348.00,
        description: 'Wireless over-ear headphones with noise-cancelling technology.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Sennheiser Momentum 3',
        price: 399.99,
        description: 'High-quality wireless headphones with noise cancellation.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Amazon Echo Show 10',
        price: 249.99,
        description: 'Smart display with Alexa, 10-inch screen, and 13MP camera.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Nest Learning Thermostat',
        price: 249.99,
        description: 'Smart thermostat with self-learning technology.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Ring Video Doorbell Pro 2',
        price: 249.99,
        description: 'Video doorbell with HD video, two-way audio, and advanced motion detection.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        name: 'Dyson V11 Torque Drive',
        price: 699.99,
        description: 'Cordless vacuum cleaner with powerful suction and long battery life.',
        image: 'https://via.placeholder.com/300x200',
      }
    ]

    await Product.createMany(products)
  }
}
