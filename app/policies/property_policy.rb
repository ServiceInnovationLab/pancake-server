# frozen_string_literal: true

class PropertyPolicy < ApplicationPolicy
  def index?
    dia? || same_council?
  end

  def show?
    dia? || same_council?
  end

  def update?
    (dia? || same_council?)
  end

  def destroy?
    (dia? || same_council?) && !record.completed
  end

  class Scope < Scope
    def resolve
      if user.dia?
        scope.all
      elsif user.present?
        scope.where(council_id: user.council_id)
      else
        scope.none
      end
    end
  end
end
