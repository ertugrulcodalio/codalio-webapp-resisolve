# frozen_string_literal: true

class TechnicianProfile < ApplicationRecord
  belongs_to :user
  belongs_to :organization

  has_many :maintenance_requests, dependent: :destroy

  validates :specialty, presence: true

  rhino_owner :organization
  rhino_references [ :user, :organization ]
end
