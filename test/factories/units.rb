# frozen_string_literal: true

FactoryBot.define do
  factory :unit do
    number { "MyString" }
    building { nil }
    organization { nil }
  end
end
