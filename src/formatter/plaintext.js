exports.format = function(array) {
  return array
          .reduce(function(p, n){
            return p.concat(n.join(''));
          },[])
          .join('\n');
};
