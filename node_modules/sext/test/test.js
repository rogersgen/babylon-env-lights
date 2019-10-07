var test = require('tape')
,sext = require('../')
,undef

test('can worky',function(t){
	var sub = {
		a: {
			a: 1
		}
	}
	var o1 = {
		a: sub
		,b: 'sup'
	}
	var o2 = {
		a: {
			a: 2
		}
		,b: 'chums'
	}
	var o3 = {
		a: {
			b: 3
		}
	}

	var r = sext(true,{},o1,null,o2,o3)
	t.equal(r.a.a, 2,'deep worky')
	t.equal(r.a.b, 3, 'deep worky')
	t.equal(sub.a.a, 1, 'deep worky')
	t.equal(sub.b, undef, 'deep worky')
	t.equal(o1.b, 'sup', 'deep worky')

	r = sext({},o1,o2,o3,false)
	t.equal(r.a.a, undef, 'shallow worky')
	t.equal(r.a.b, 3, 'shallow worky')
	t.equal(sub.a.b, undef, 'shallow worky')
	t.equal(o1.b, 'sup', 'non clobbery')

	sext(o1,o2,o3)
	t.equal(o1.b, 'chums', 'no copy')

	t.end()

})

test('funcs cool 2',function(t){
	var f1 = new Function
	f1.prototype.giveMeCheese = function(){
		return 'brie'
	}

	var f2 = new Function
	f2.prototype.giveMeWine = function(){
		return 'zin'
	}

	sext(f1.prototype,f2.prototype)
	var waiter = new f1()

	t.ok(f1.prototype.giveMeWine instanceof Function, 'func in da house')
	t.equal(waiter.giveMeWine(), 'zin', 'func in da house')

	t.end();
})

test('arrays',function(t){
	var o,o1,o2,o3,o4;


	o1 = {
		a: [
			'wefwef','wefwef'
		]
	};
	o2 = {
		a: [
			{sup:'mate'}
		]
	};

	o = sext({}, o1, o2);
	t.ok(o.a[0] && o.a[0].sup == 'mate' && o.a[1] === undef, 'shallow array property');

	o = sext(true, {}, o1, o2);
	t.ok(o.a[0] && o.a[0].sup == 'mate' && o.a[1] === 'wefwef', 'deep array property');


	o1 = ['a', null, {singin:'in', the:'rain'}];
	o2 = {a:'1', stake:'sawce'};
	o3 = [1, ['b'], {singin:'on'}]
	o4 = {yo:'yo'};

	o = sext([], o1, o2, o3, o4);
	t.ok(o instanceof Array, 'target remains an array');
	t.ok(o[0] === 1, '[0] was overwritten');
	t.ok(o[1] instanceof Array && o[1][0] === 'b', '[1] was overwritten');
	t.ok(o[2] instanceof Object && o[2].singin == 'on' && o[2].the === undef, '[2] was copied shallowly');
	t.ok(o[3] === undef, '[3] was left alone');
	t.ok(o.stake == 'sawce' && o.yo === 'yo', 'object keys transferred');

	o = sext(true, [], o1, o2, o3, o4);
	t.ok(o instanceof Array, 'target remains an array');
	t.ok(o[2] instanceof Object && o[2].singin == 'on' && o[2].the === 'rain', '[2] was copied deeply');

	o = sext(true, {}, o1, o2, o3, o4);
	t.ok(!(o instanceof Array), 'target remains an object');


	o = sext(true, 'im not an object', 'neither am i', o1, o2, o3, o4);
	t.ok(o instanceof Array, 'target inherits arrayness');


	t.end();
})


