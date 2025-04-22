// BEGIN
export default function magic(...objs) {
  
  const Sum_ = objs.reduce((sum, num) => sum + num, 0);
  const fun_next = (...next_objs) => magic(Sum_, ...next_objs);
  fun_next.valueOf = () => Sum_;
  
  return fun_next;
  }
  
// END
