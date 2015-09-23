# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

User.create(username: "foo",
                email: "foo@1",
                password: '12345678',
                password_confirmation: '12345678')
10.times do

  User.create( username: Faker::Internet.user_name,
                email: Faker::Internet.safe_email,
                password: '12345678',
                password_confirmation: '12345678'
              )

end