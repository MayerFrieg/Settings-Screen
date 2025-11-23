"use client";

import { useState } from "react";

interface AppointmentType {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  appointmentTypes: AppointmentType[];
}

export default function ColibAppointmentsSettings() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "default",
      name: "Default",
      appointmentTypes: [
        { id: "1", name: "Control visit" },
        { id: "2", name: "First visit" },
      ],
    },
  ]);

  const addCategory = () => {
    const newCategory: Category = {
      id: `category-${Date.now()}`,
      name: "New Category",
      appointmentTypes: [],
    };
    setCategories([...categories, newCategory]);
  };

  const deleteCategory = (categoryId: string) => {
    if (categories.length > 1) {
      setCategories(categories.filter((cat) => cat.id !== categoryId));
    }
  };

  const copyCategory = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (category) {
      const newCategory: Category = {
        id: `category-${Date.now()}`,
        name: `${category.name} (Copy)`,
        appointmentTypes: category.appointmentTypes.map((type) => ({
          id: `type-${Date.now()}-${Math.random()}`,
          name: type.name,
        })),
      };
      setCategories([...categories, newCategory]);
    }
  };

  const addAppointmentType = (categoryId: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              appointmentTypes: [
                ...cat.appointmentTypes,
                { id: `type-${Date.now()}`, name: "New Type" },
              ],
            }
          : cat
      )
    );
  };

  const deleteAppointmentType = (categoryId: string, typeId: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              appointmentTypes: cat.appointmentTypes.filter((type) => type.id !== typeId),
            }
          : cat
      )
    );
  };

  const copyAppointmentType = (categoryId: string, typeId: string) => {
    setCategories(
      categories.map((cat) => {
        if (cat.id === categoryId) {
          const type = cat.appointmentTypes.find((t) => t.id === typeId);
          if (type) {
            return {
              ...cat,
              appointmentTypes: [
                ...cat.appointmentTypes,
                { id: `type-${Date.now()}`, name: `${type.name} (Copy)` },
              ],
            };
          }
        }
        return cat;
      })
    );
  };

  const updateCategoryName = (categoryId: string, newName: string) => {
    setCategories(
      categories.map((cat) => (cat.id === categoryId ? { ...cat, name: newName } : cat))
    );
  };

  const updateAppointmentTypeName = (categoryId: string, typeId: string, newName: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              appointmentTypes: cat.appointmentTypes.map((type) =>
                type.id === typeId ? { ...type, name: newName } : type
              ),
            }
          : cat
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
      </div>

      {/* Add Category Button */}
      <div className="text-center mb-6">
        <button
          onClick={addCategory}
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Category
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 text-center mb-8 max-w-3xl mx-auto">
        Service categories help organize the range of services provided by your organization. They allow you to group services with similar appointment types. Please note that these categories will appear in the same order throughout the online booking process.
      </p>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) => updateCategoryName(category.id, e.target.value)}
                  className="text-lg font-semibold text-gray-900 border-none focus:outline-none focus:ring-2 focus:ring-teal-500 rounded px-2 py-1 -ml-2"
                />
              </div>
              <div className="flex items-center gap-2">
                {/* Edit Icon */}
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                {/* Copy Icon */}
                <button
                  onClick={() => copyCategory(category.id)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                {/* Delete Icon */}
                {categories.length > 1 && (
                  <button
                    onClick={() => deleteCategory(category.id)}
                    className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Appointment Types */}
            {category.appointmentTypes.length > 0 && (
              <div className="space-y-3 mb-4">
                {category.appointmentTypes.map((type) => (
                  <div
                    key={type.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <input
                      type="text"
                      value={type.name}
                      onChange={(e) => updateAppointmentTypeName(category.id, type.id, e.target.value)}
                      className="flex-1 text-sm text-gray-900 border-none bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 rounded px-2 py-1 -ml-2"
                    />
                    <div className="flex items-center gap-2">
                      {/* Edit Icon */}
                      <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      {/* Copy Icon */}
                      <button
                        onClick={() => copyAppointmentType(category.id, type.id)}
                        className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                      {/* Delete Icon */}
                      <button
                        onClick={() => deleteAppointmentType(category.id, type.id)}
                        className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add Type Link */}
            <button
              onClick={() => addAppointmentType(category.id)}
              className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Type
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

