print("hello python!")
print('1024 * 768 =',1024 * 768)

a = 100
if a >= 0:
    print(a)
else:
    print(-a)

classmates = ['Michael', 'Bob', 'Tracy']
print(classmates)

'''
total = item_one + \
        item_two + \
        item_three
'''

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
print ("dict['Name']: ", dict['Name'])
print ("dict['Age']: ", dict['Age'])


import time  # 引入time模块
 
ticks = time.time()
print ("当前时间戳为:", ticks)

# name=input()
# print("hello,%s" % name)

try:
    fh = open("testfile", "w")
    fh.write("aaa")
except:
    print ("Error: 没有找到文件或读取文件失败")
else:
    print ("内容写入文件成功")
    fh.close()
finally:
    print("hh")

'''
标准数据类型
Numbers（数字）
String（字符串）
List（列表）
Tuple（元组）
Dictionary（字典）
'''

'''
List（列表）
list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
加号 + 是列表连接运算符，星号 * 是重复操作
'''

'''
Python 元组
元组是另一个数据类型，类似于 List（列表）。
tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )
元组用 () 标识。内部元素用逗号隔开。但是元组不能二次赋值，相当于只读列表。
'''

'''
Python 字典
tinydict = {'name': 'john','code':6734, 'dept': 'sales'}
列表是有序的对象集合，字典是无序的对象集合。
'''

'''
Pyinstaller -F -w main.py
'''