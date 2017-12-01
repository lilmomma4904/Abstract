# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower, uniqueness: { scope: :followee }

  belongs_to :follower,
    class_name: 'User',
    foreign_key: :follower_id,
    primary_id: :id

  belongs_to :followee,
    class_name: 'User',
    foreign_key: :followee_id,
    primary_id: :id
end
