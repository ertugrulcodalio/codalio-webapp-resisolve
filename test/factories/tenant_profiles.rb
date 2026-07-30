# frozen_string_literal: true

FactoryBot.define do
  factory :tenant_profile do
    lease_start_date { "2026-07-30" }
    lease_end_date { "2026-07-30" }
    user { nil }
    unit { nil }
    organization { nil }
  end
end
