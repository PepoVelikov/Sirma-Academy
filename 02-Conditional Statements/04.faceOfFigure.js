function faceOfFigure(type, dimA, dimB) {
  let area;
  if (type == 'square') {
    area = dimA * dimA;
  } else if (type == 'rectangle') {
    area = dimA * dimB;
  } else if (type == 'triangle') {
    area = (dimA * dimB) / 2;
  } else if (type == 'circle') {
    area = Math.PI * Math.pow(dimA, 2);
  }

  console.log(area.toFixed(2));
}

faceOfFigure('circle', 10);