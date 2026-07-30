# frozen_string_literal: true

class Unit < ApplicationRecord
  belongs_to :building
  belongs_to :organization
  has_one :tenant_profile, dependent: :destroy
  has_many :maintenance_requests, dependent: :destroy

  validates :number, presence: true

  rhino_owner :organization
  rhino_references [ :building, :organization ]
end
