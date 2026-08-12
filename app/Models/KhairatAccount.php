<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KhairatAccount extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return ['balance_due' => 'decimal:2'];
    }

    public function household(): BelongsTo
    {
        return $this->belongsTo(Household::class);
    }
}
