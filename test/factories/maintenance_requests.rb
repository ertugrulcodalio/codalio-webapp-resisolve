# frozen_string_literal: true

FactoryBot.define do
  factory :maintenance_request do
    title { "MyString" }
    description { "MyText" }
    status { 1 }
    severity { 1 }
    tenant_profile { nil }
    unit { nil }
    service_category { nil }
    technician_profile { nil }
    organization { nil }
  end
end
