import Image from 'next/image';

interface IOpenMapIconProps {
  id: string;
  title: string;
}

export const OpenMapIcon = ({ id, title }: IOpenMapIconProps) => {
  return <Image src={`http://openweathermap.org/img/w/${id}.png`} alt={title} width="50" height="50" />;
};
