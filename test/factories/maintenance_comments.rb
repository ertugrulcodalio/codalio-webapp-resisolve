# frozen_string_literal: true

FactoryBot.define do
  factory :maintenance_comment do
    body { "MyText" }
    maintenance_request { nil }
    user { nil }
    organization { nil }
  end
end
