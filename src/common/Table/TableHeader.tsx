import React from 'react';

function TableHeader({ tableHeaders }: { tableHeaders: string[] }) {
  return (
    <thead className='font-medium text-[#785614] capitalize  bg-white border border-[#D0D5DD] border-b-[#EAECF0]'>
      <tr>
        {tableHeaders.map((header) =>
          !['_id', 'S/N'].includes(header) ? (
            <th className='px-3 py-3' scope='col' key={header}>
              {/* Convert camel cased header to words */}
              {header?.replace(/([a-z])([A-Z])/g, '$1 $2')?.toLowerCase()}
            </th>
          ) : (
            <th className='px-3 py-3' scope='col' key={header}></th>
          )
        )}
      </tr>
    </thead>
  );
}

export default TableHeader;
