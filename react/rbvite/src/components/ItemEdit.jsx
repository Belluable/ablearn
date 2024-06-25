import { FaCartPlus, FaSave, FaUndoAlt } from 'react-icons/fa';
import Button from './atoms/Button';
import Input from './atoms/Input';
import { useEffect, useRef } from 'react';

export default function ItemEdit(
  item,
  cancel, // cancelEditing | cancelAdding
  save // saveItem | addItem
) {
  const nameRef = useRef();
  const priceRef = useRef();

  // const saveIcon = item.id ? <FaSave /> : <FaCartPlus />;

  const saveItem = (evt) => {
    evt.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    console.log('🚀  itemName, itemPrice:', name, price);
    if (!name || !price) {
      alert('상품명과 금액을 정확히 입력하세요!');
      nameRef.current.focus();
      return;
    }
    save({ id: item.id, name, price: +price });
    cancel();
  };

  useEffect(() => {
    if (item) {
      nameRef.current.value = item.name;
      priceRef.current.value = item.price;
      nameRef.current.select();
    }
  }, [item]);

  return (
    <>
      <form className="m-2 flex gap-3 border border-green-300 p-3">
        <Input ref={nameRef} placeholder="상품명" />
        <Input ref={priceRef} type="number" placeholder="금액" />
        <Button text={<FaUndoAlt />} onClick={cancel} size="sm" />
        <Button
          text={item.id ? <FaSave /> : <FaCartPlus />}
          onClick={saveItem}
          type="primary"
          size="sm"
        />
      </form>
    </>
  );
}