# frozen_string_literal: true

class MaintenanceComment < ApplicationRecord
  belongs_to :maintenance_request
  belongs_to :user
  belongs_to :organization

  validates :body, presence: true

  rhino_owner :organization
  rhino_references [ :maintenance_request, :user, :organization ]
end
