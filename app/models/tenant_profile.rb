# frozen_string_literal: true

class TenantProfile < ApplicationRecord
  belongs_to :user
  belongs_to :unit
  belongs_to :organization

  has_many :maintenance_requests, dependent: :destroy

  validates :lease_start_date, presence: true
  validates :lease_end_date, presence: true

  rhino_owner :organization
  rhino_references [ :user, :unit, :organization ]
end
