# frozen_string_literal: true

FactoryBot.define do
  factory :service_category do
    name { "MyString" }
    status { 1 }
    organization { nil }
  end
end
