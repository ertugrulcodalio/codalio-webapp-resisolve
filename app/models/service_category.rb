# frozen_string_literal: true

class ServiceCategory < ApplicationRecord
  belongs_to :organization
  has_many :maintenance_requests, dependent: :destroy

  attribute :status, :integer
  enum :status, { draft: 0, active: 1, inactive: 2 }

  validates :name, presence: true
  validates :status, presence: true

  rhino_owner :organization
  rhino_references [ :organization ]
end
