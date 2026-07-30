# frozen_string_literal: true

FactoryBot.define do
  factory :technician_profile do
    specialty { "MyString" }
    user { nil }
    organization { nil }
  end
end
