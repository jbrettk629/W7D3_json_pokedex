
json.gifts @gifts do |gift|
  json.extract! gift, :title, :description
end

json.random_stuff do
  json.array! @gifts do |gift|
    json.extract! gift, :title, :description
  end
end
