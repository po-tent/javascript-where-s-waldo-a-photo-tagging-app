# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

skiSlopes = Image.create(
  title: 'Ski Slopes',
  url: 'skiSlopes'
)

skiSlopes.characters.create(name: 'waldo', x_location: 2569, y_location: 1379)
skiSlopes.characters.create(name: 'wenda', x_location: 1472, y_location: 792)
skiSlopes.characters.create(name: 'wizard', x_location: 211, y_location: 1441)
skiSlopes.characters.create(name: 'odlaw', x_location: 955, y_location: 1211)

spaceStation = Image.create(
  title: "Space Station",
  url: 'spaceStation'
)

spaceStation.characters.create(name: 'waldo', x_location: 1215, y_location: 1230)
spaceStation.characters.create(name: 'wenda', x_location: 885, y_location: 1025)
spaceStation.characters.create(name: 'wizard', x_location: 2345, y_location: 1142)
spaceStation.characters.create(name: 'odlaw', x_location: 215, y_location: 1365)

fruitLand = Image.create(
  title: 'Fruit Land',
  url: 'fruitLand'
)

fruitLand.characters.create(name: 'waldo', x_location: 2675, y_location: 1285)
fruitLand.characters.create(name: 'wenda', x_location: 400, y_location: 1645)
fruitLand.characters.create(name: 'wizard', x_location: 755, y_location: 952)
fruitLand.characters.create(name: 'odlaw', x_location: 1984, y_location: 1087)





