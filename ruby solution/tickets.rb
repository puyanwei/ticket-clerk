class TicketClerk
  attr_reader :till_hash

  def initialize
    @till_hash = { 25 => 0, 50 => 0, 100 => 0 }
  end

  def sell(customer_cash_array)
    customer_cash_array.each do |note|
      @till_hash[note] += 1
      if can_make_change?(note)
        give_change(note)
      else
        return 'NO'
      end
    end
    'YES'
  end
  
  private
  
  def give_change(note)
    case note
    when 50
      @till_hash[25] -= 1
    when 100
      if can_give_fifty_and_twenty_five?
        @till_hash[25] -= 1
        @till_hash[50] -= 1
      else
        @till_hash[25] -= 3
      end
     else
       nil
     end
  end

  def can_give_fifty_and_twenty_five?
    (@till_hash[50] > 0 && @till_hash[25] > 0)
  end

  def can_give_three_twenty_fives?
    (@till_hash[25] > 2)
  end

  def can_make_change?(note)
    (can_give_fifty_and_twenty_five? || can_give_three_twenty_fives?) if note == 100
    (@till_hash[25] > 0) if note == 50
    true
  end
end

cash = [25, 25, 50, 100, 25]
tc = TicketClerk.new
puts tc.sell(cash)
puts ''
print tc.till_hash
puts ''
